<template>
  <div class="card vue-avatar-cropper-demo text-center">
    <div class="card-body">
      <img :src="user.avatar" class="card-img avatar"/>
      <div class="card-img-overlay">
        <button class="btn btn-primary btn-sm" id="pick-avatar">Change Picture</button>
      </div>
    </div>
    <div class="card-footer text-muted" v-html="title"></div>
    <avatar-cropper
      @uploading="handleUploading"
      @uploaded="handleUploaded"
      @completed="handleCompleted"
      @error="handlerError"
      trigger="#pick-avatar"
      :upload-form-data="{id: user.id}"
      upload-url="http://shapi.local/api/file/upload"/>
  </div>
</template>

<script>
import AvatarCropper from 'vue-avatar-cropper'
import { env } from '@/utils/auth'

export default {
  components: { AvatarCropper },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          id: undefined,
          name: '',
          email: '',
          avatar: '',
          roles: ''
        }
      }
    }
  },
  data () {
    return {
      message: 'ready',
      title: 'Profile Picture',
      url: env.domain
    }
  },
  created () {
    // this.user.avatar = this.url + this.user.avatar
    if (this.user.avatar === '') {
      this.user.avatar = this.avatar
    }
  },
  methods: {
    handleUploading (form, xhr) {
      this.message = 'uploading...'
    },
    handleUploaded (response) {
      // console.log(response)
      if (response.status) {
        this.user.avatar = response.data
        // Maybe you need call vuex action to
        // update user avatar, for example:
        // this.$dispatch('updateUser', {avatar: response.url})
        this.message = 'user avatar updated.'
        console.log(this.message)
      }
    },
    handleCompleted (response, form, xhr) {
      this.message = 'upload completed.'
      console.log(this.message)
    },
    handlerError (message, type, xhr) {
      this.message = 'Oops! Something went wrong...'
    }
  }
}
</script>

<style>
  .vue-avatar-cropper-demo {
    max-width: 18em;
    margin: 0 auto;
  }

  .avatar {
    width: 160px;
    border-radius: 6px;
    display: block;
    margin: 20px auto;
  }

  .card-img-overlay {
    display: none;
    transition: all 0.5s;
  }

  .card-img-overlay button {
    margin-top: 20vh;
  }

  .card:hover .card-img-overlay {
    display: block;
  }
</style>
