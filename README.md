# FlexZone Fitness - Class Scheduler

This is a simple, single-page web application built for the staff at FlexZone Fitness. It replaces their manual scheduling system with a clean digital dashboard where they can add, track, and remove group fitness sessions in real time. 

The app is built using Vue 3 and runs entirely in the browser, meaning it does not require an external database to function. 

## What This Project Does

* **Adds New Classes:** A built-in form lets staff input the class name, instructor, date, start time, and maximum capacity.
* **Validates Inputs:** The form checks to ensure that no fields are left blank and that the room capacity is a valid number before adding the data.
* **Live Schedule List:** The timetable updates immediately when a class is added or removed.
* **Tracks Stats Automatically:** The app counts the total number of scheduled classes and figures out which session is coming up next on the calendar.
* **Saves Data Locally:** It uses the browser's local storage to save the schedule, so the data remains intact even if you refresh the page.
* **Removes Canceled Sessions:** Staff can click a single button to instantly remove a class if it gets canceled.

## How to Install and Run the App

Make sure you have Node.js installed on your computer before starting.

1. **Navigate to the Project Folder** Open your terminal or command prompt and change your directory to the project folder:
   ```bash
   cd week9_ex04_vuejs_fitness_scheduler
