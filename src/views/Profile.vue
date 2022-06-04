<template>
  <div>
    <div class="mx-4">
      <img :src="$auth.user.picture" alt="User's profile picture" />
      <card-co>
        <template #header> </template>
        <template #title> {{ $auth.user.name }} </template>
        <template #subtitle> {{ $auth.user.email }} </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Save" />
          <Button
            icon="pi pi-times"
            label="Cancel"
            class="p-button-secondary"
            style="margin-left: 0.5em"
          />
        </template>
      </card-co>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-page",
};
</script>
