<template>
  <div class="content">
    <div class="content__header">
      <span v-for="col in columns" :key="col.code">
        <input type="checkbox" v-model="col.visible" />
        <label>{{ col.label }}</label>
      </span>
    </div>
    <div class="content__search">
      <label>Поиск...</label>
      <input type="text" />
    </div>

    <div class="content__main">
      <table class="content__main-table">
        <thead>
          <tr>
            <template v-for="col in columns">
              <th v-if="col.visible" :key="col.label">
                {{ col.label }}
              </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <template v-for="col in columns">
              <td v-if="col.visible" :key="col.label">
                {{ user[col.code] }}
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      columns: [
        {
          label: '№ п/п',
          code: 'id',
          visible: true,
        },
        {
          label: 'Имя',
          code: 'firstName',
          visible: true,
        },
        {
          label: 'Фамилия',
          code: 'lastName',
          visible: true,
        },
        {
          label: 'Дата рождения',
          code: 'dob',
          visible: true,
        },
      ],
      users: [
        {
          id: 1,
          firstName: 'Artem',
          lastName: 'Strekalov',
          dob: '1994',
        },
        {
          id: 2,
          firstName: 'Ivan',
          lastName: 'Ivanov',
          dob: '1997',
        },
        {
          id: 3,
          firstName: 'Victor',
          lastName: 'Kozybenko',
          dob: '1993',
        },
      ],
    }
  },
  async mounted() {
   await this.$store.dispatch('loadPosts')
    console.log(this.$store.getters.getPosts)
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.content {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    width: 100%;
    height: 55px;
    margin-top: 30px;
    border: 1px solid #fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    input {
      margin-right: 5px;
      cursor: pointer;
    }
  }
  &__search {
    display: flex;
    align-items: center;
    margin-top: 30px;
    max-width: 300px;
    width: 100%;
    input {
      width: 100%;
      height: 30px;
      margin-left: 15px;
      padding: 0 10px;
      outline: none;
    }
  }
  &__main {
    width: 100%;
    height: 100%;
    margin-top: 30px;
    &-table {
      width: 100%;
      border-collapse: collapse;
      text-align: center;
      border: 1px solid #fff;
      th,
      td {
        padding: 10px;
        border: 1px solid #fff;
        text-align: center;
      }
      th:first-child,
      td:first-child {
        width: 70px;
      }
    }
  }
}
</style>
