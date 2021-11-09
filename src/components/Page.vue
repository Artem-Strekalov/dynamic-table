<template>
  <div class="content">
    <div class="content__header">
      <span v-for="col in columns" :key="col.code">
        <input type="checkbox" v-model="col.visible" />
        <label>{{ col.label }}</label>
      </span>
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
      test:{
        name:'Artem',
        
      },
      columns: [
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
}
</script>

<style scoped lang="scss">
.content {
  height: 100px;
  max-width: 800px;
  width: 100%;

  &__header {
    width: 100%;
    height: 55px;
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
  &__main {
    width: 100%;
    height: 100%;
    margin-top: 30px;
    &-table {
      width: 100%;
      td {
        text-align: center;
      }
    }
  }
}
</style>
