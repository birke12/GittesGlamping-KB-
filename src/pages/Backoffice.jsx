import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import styles from "../style/pages/backoffice.module.css";

const Backoffice = () => {
	const { login, user, isAuthenticated } = useAuth();
	const { get, put, post, del, error, isLoading } = useFetch();
	const [activities, setActivities] = useState([]);
	const [selectedActivity, setSelectedActivity] = useState(null);
	const [addFormData, setAddFormData] = useState({
		title: "",
		description: "",
		weekday: "",
		image: null,
		time: "",
	});
	const [editFormData, setEditFormData] = useState({
		title: "",
		description: "",
		weekday: "",
		image: null,
		time: "",
	});

	useEffect(() => {
		if (!isAuthenticated()) {
			return;
		}

		const fetchActivities = async () => {
			try {
				const activitiesData = await get.activities();
				setActivities(activitiesData.data);
			} catch (error) {
				console.error("Error fetching activities:", error);
			}
		};

		fetchActivities();
	}, []);

	const handleAddInputChange = (e) => {
		const { name, value } = e.target;
		setAddFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleAddFileChange = (e) => {
		setAddFormData((prev) => ({ ...prev, image: e.target.files[0] }));
	};

	const handleAddFormSubmit = async (e) => {
		e.preventDefault();

		const newActivity = {
			title: addFormData.title,
			description: addFormData.description,
			weekday: addFormData.weekday,
			time: addFormData.time,
		};

		try {
			await post.activities(newActivity);
			alert("Activity added successfully!");

			// Refresh activities list
			const activitiesData = await get.activities();
			setActivities(activitiesData.data);

			// Reset add form
			setAddFormData({
				title: "",
				description: "",
				weekday: "",
				image: null,
				time: "",
			});
		} catch (error) {
			console.error("Error adding activity:", error);
		}
	};

	const handleSelectChange = (e) => {
		const activityId = e.target.value;
		if (!activityId) {
			setSelectedActivity(null);
			setEditFormData({
				title: "",
				description: "",
				weekday: "",
				image: null,
				time: "",
			});
			return;
		}
		const activity = activities.find((a) => a._id === activityId);
		setSelectedActivity(activity);
		if (activity) {
			setEditFormData({
				title: activity.title,
				description: activity.description || "",
				weekday: activity.weekday || "",
				image: null,
				time: activity.time || "",
			});
		}
	};

	const handleEditInputChange = (e) => {
		const { name, value } = e.target;
		setEditFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleEditFileChange = (e) => {
		setEditFormData((prev) => ({ ...prev, image: e.target.files[0] }));
	};

	const handleEditFormSubmit = async (e) => {
		e.preventDefault();
		if (!selectedActivity) return;

		const updatedActivity = {
			title: editFormData.title,
			description: editFormData.description,
			weekday: editFormData.weekday,
			time: editFormData.time,
		};

		try {
			await put.activities(selectedActivity._id, updatedActivity);
			alert("Activity updated successfully!");

			// Refresh activities list
			const activitiesData = await get.activities();
			setActivities(activitiesData.data);
		} catch (error) {
			console.error("Error updating activity:", error);
		}
	};

	const handleDeleteActivity = async (activityId) => {
		try {
			await del.activities(activityId);
			alert("Activity deleted successfully!");

			// Refresh activities list
			const activitiesData = await get.activities();
			setActivities(activitiesData.data);
		} catch (error) {
			console.error("Error deleting activity:", error);
		}
	};

	if (!isAuthenticated() || (user && user.role !== "admin")) {
		return (
			<div className={styles.backoffice}>
				<h1>Backoffice</h1>
				<p>You do not have permission to access this page.</p>

				<h2>Please log in</h2>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						const email = document.getElementById("email").value;
						const password = document.getElementById("password").value;

						login(email, password);
					}}
				>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" required />
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name="password" required />

					<button type="submit">Log in</button>
				</form>
			</div>
		);
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className={styles.backoffice}>
			<section>
				<h1>Backoffice</h1>
				<p>
					<Link to="/">Back to frontend</Link>
				</p>
			</section>
			<section>
				<h2>Activites</h2>
				<table>
					<thead>
						<tr>
							<th>Activity</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{activities &&
							activities.map((activity) => (
								<tr key={activity._id} data-id={activity._id}>
									<td>{activity.title}</td>
									<td>
										<button onClick={() => handleDeleteActivity(activity._id)}>Delete</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</section>
			<div className={styles.forms}>
				<section>
					<h2>Add new activity</h2>
					<form className={styles.form} onSubmit={handleAddFormSubmit}>
						<label htmlFor="addActivityTitle">Title:</label>
						<input type="text" id="addActivityTitle" name="title" value={addFormData.title} onChange={handleAddInputChange} />
						<label htmlFor="addActivityDescription">Description:</label>
						<input type="text" id="addActivityDescription" name="description" value={addFormData.description} onChange={handleAddInputChange} />
						<label htmlFor="addActivityWeekday">Weekday:</label>
						<input type="text" id="addActivityWeekday" name="weekday" value={addFormData.weekday} onChange={handleAddInputChange} />
						<label htmlFor="addActivityImage">Image:</label>
						<input type="file" id="addActivityImage" name="image" onChange={handleAddFileChange} />
						<label htmlFor="addActivityTime">Time:</label>
						<input type="text" id="addActivityTime" name="time" value={addFormData.time} onChange={handleAddInputChange} />
						<button type="submit">Add</button>
					</form>
				</section>
				<div className={styles.divider}></div>
				<section>
					<h2>Edit activities</h2>
					<select name="activityToEdit" id="activityToEdit" className={styles.select} onChange={handleSelectChange}>
						<option value="">Select an activity</option>
						{activities &&
							activities.map((activity) => (
								<option key={activity._id} value={activity._id}>
									{activity.title}
								</option>
							))}
					</select>

					<form className={styles.form} onSubmit={handleEditFormSubmit}>
						<label htmlFor="editActivityTitle">Title:</label>
						<input type="text" id="editActivityTitle" name="title" value={editFormData.title} onChange={handleEditInputChange} />
						<label htmlFor="editActivityDescription">Description:</label>
						<input type="text" id="editActivityDescription" name="description" value={editFormData.description} onChange={handleEditInputChange} />
						<label htmlFor="editActivityWeekday">Weekday:</label>
						<input type="text" id="editActivityWeekday" name="weekday" value={editFormData.weekday} onChange={handleEditInputChange} />
						<label htmlFor="editActivityImage">Image:</label>
						<input type="file" id="editActivityImage" name="image" onChange={handleEditFileChange} />
						<label htmlFor="editActivityTime">Time:</label>
						<input type="text" id="editActivityTime" name="time" value={editFormData.time} onChange={handleEditInputChange} />
						<button type="submit">Edit</button>
					</form>
				</section>
			</div>
		</div>
	);
};

export default Backoffice;
