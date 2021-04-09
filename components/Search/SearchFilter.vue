<template>
  <div class="filter">
    <div class="filter--selector">
      <span class="name">{{selectedCategory}}</span>
      <span class="icon "> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z"/></svg> </span>
    </div>
    <div class="filter--list-to-select">
      <ul>
        <li v-for="f in selectionList"> {{f}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFilter",
  data() {
    return {
      selectionList:['all','Arrows','Alerts','Brands','Buttons'],
    }
  },

  computed: {
    selectedCategory(){
      return this.selectionList[0];
    }
  }
}
</script>

<style lang="scss" scoped>
  .filter{
    &--selector{
      @apply p-5 flex justify-between rounded-md;
      background-color: $bg-tertiary ;
      width:15rem;
      cursor: pointer;

      span{
        text-transform: capitalize;

        &.icon{
          transition: transform .4s ease-in;
        }
        &.selecting{
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
