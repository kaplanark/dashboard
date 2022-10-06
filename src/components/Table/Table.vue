<script setup>
const props = defineProps(['data']);
</script>

<template>
    <div class="table">
        <div class="table__header">

        </div>
        <div class="table__body">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Start Date</th>
                        <th>Members</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tets Tile</td>
                        <td>Lorem ipsum dolor, sit amet consectetur</td>
                        <td>01.03.2022</td>
                        <td>Kaplan</td>
                        <td>Active</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="table__footer">

        </div>
    </div>
</template>