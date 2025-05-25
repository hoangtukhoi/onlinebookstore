<template>
  <div class="comments-section">
    <h3>Bình luận</h3>
    <div v-if="user">
      <textarea v-model="newComment" placeholder="Viết bình luận của bạn..." class="w-full p-2 border"></textarea>
      <button @click="submitComment" class="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Gửi bình luận
      </button>
    </div>
    <div v-else class="text-red-500">
      Vui lòng đăng nhập để bình luận.
    </div>
    <div class="comment-list mt-4">
      <div v-for="comment in comments" :key="comment._id" class="comment mb-2 p-2 border-b">
        <p><strong>{{ comment.userId.username }}</strong> - {{ formatDate(comment.createdAt) }}</p>
        <p>{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    bookId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      comments: [],
      newComment: '',
      user: null // Giả sử thông tin user được lưu trong Vuex hoặc localStorage
    };
  },
  async created() {
    this.fetchComments();
    // Giả sử bạn có cách lấy thông tin user đã đăng nhập
    this.user = JSON.parse(localStorage.getItem('user')) || null;
  },
  methods: {
    async fetchComments() {
      try {
        const response = await axios.get(`/api/comments/book/${this.bookId}`);
        this.comments = response.data;
      } catch (error) {
        console.error('Lỗi khi lấy bình luận:', error);
      }
    },
    async submitComment() {
      if (!this.newComment.trim()) return;
      try {
        const response = await axios.post('/api/comments', {
          bookId: this.bookId,
          userId: this.user._id,
          content: this.newComment
        });
        this.comments.unshift(response.data);
        this.newComment = '';
      } catch (error) {
        console.error('Lỗi khi gửi bình luận:', error);
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleString('vi-VN');
    }
  }
};
</script>

<style scoped>
.comments-section {
  max-width: 600px;
  margin: 0 auto;
}
.comment {
  background: #f9f9f9;
}
</style>