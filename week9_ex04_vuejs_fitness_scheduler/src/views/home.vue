<template>
  <div class="container">
    <section class="admin-card">
      <h2>Add New Class</h2>
      <form @submit.prevent="addClass">
        <div class="form-group">
          <label>Class Name</label>
          <input v-model="form.name" type="text" placeholder="e.g. Yoga" />
        </div>
        <div class="form-group">
          <label>Coach</label>
          <input v-model="form.coach" type="text" placeholder="e.g. Sarah" />
        </div>
        <div class="row">
          <div class="form-group">
            <label>Time</label>
            <input v-model="form.time" type="text" placeholder="e.g. Monday 9am" />
          </div>
          <div class="form-group">
            <label>Capacity</label>
            <input v-model="form.capacity" type="number" placeholder="20" />
          </div>
        </div>
        <button type="submit">Save Session</button>
      </form>
    </section>

    <section>
      <h2>Current Schedule</h2>
      <div v-if="classes.length === 0" class="empty-state">There are no classes scheduled right now.</div>
      <div v-else>
        <p>Total sessions: {{ classes.length }}</p>
        <ul class="schedule-list">
          <li v-for="(item, index) in classes" :key="index" class="schedule-item">
            <div>
              <strong>{{ item.name }}</strong> ({{ item.time }})<br />
              <small>Coach: {{ item.coach }} | Max: {{ item.capacity }}</small>
            </div>
            <button @click="deleteClass(index)" class="btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
const classes = ref([]);
const form = ref({ name: "", coach: "", time: "", capacity: "" });

const addClass = () => {
  if (!form.value.name || !form.value.coach || !form.value.time || !form.value.capacity) {
    alert("Please fill in all details.");
    return;
  }
  classes.value.push({ ...form.value });
  form.value = { name: "", coach: "", time: "", capacity: "" };
};

const deleteClass = (index) => {
  classes.value.splice(index, 1);
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.admin-card {
  background: #fff;
  padding: 2rem;
  border: 1px solid #ddd;
  margin-bottom: 2rem;
}
.form-group {
  margin-bottom: 1rem;
}
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
}
button {
  background: #0056b3;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.schedule-list {
  list-style: none;
  padding: 0;
}
.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
}
.btn-danger {
  background: #dc3545;
}
.empty-state {
  padding: 2rem;
  border: 2px dashed #ddd;
  text-align: center;
  color: #666;
}
</style>
