<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="serverItems"
    :items-length="totalItems"
    :loading="loading"
    :search="search"
    item-value="title"
    @update:options="fetchData"
  >
    <template v-slot:thead>
      <tr>
        <td>
          <v-text-field v-model="title" class="ma-2" density="compact" placeholder="Straßen durchsuchen" hide-details></v-text-field>
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>

<script>
  export default {
    data: () => ({
      itemsPerPage: 5,
      pagination: {
        rowsPerPage: 100,
        descending: false,
        sortBy: "title",
        page: 1
      },
      headers: [
        {
          title: 'Titel',
          align: 'start',
          sortable: true,
          key: 'title',
        },
        { title: 'UserID', key: 'userId', align: 'end' },
        { title: 'id', key: 'id', align: 'end' },
      ],
      serverItems: [],
      loading: true,
      totalItems: 0,
      title: '',
      calories: '',
      search: '',
    }),
    watch: {
      title () {
        this.search = String(Date.now())
      },
      calories () {
        this.search = String(Date.now())
      },
    },
    methods: {
      // fetch({ page, itemsPerPage, sortBy, search: { name: this.name, calories: this.calories } }).then(({ items, total }) => {
      buildApiRoute(){
        let url = "https://jsonplaceholder.typicode.com/todos";
        if(this.title){
          url += "?" + new URLSearchParams({title: this.title}).toString()
        }

        return url;
      },
      fetchData() {
        fetch(this.buildApiRoute(), 
        {
          method: "GET",
          headers: {},
        })
          .then((response) => {
            response.json().then((data) => {
              console.log('response', data);
              this.serverItems = data
              this.totalItems = data.length
              this.loading = false
            });
          })
          .catch((err) => {
            console.error(err);
          });
      },
    },
  }
</script>