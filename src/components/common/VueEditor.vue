<template>
<div class="editor-wrap">
  <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  </quill-editor>
</div>
</template>

<script>
  export default {
    data () {
      return {
        content: '',
        editorOption: {
          // some quill options
        }
      }
    },
    methods: {
      onEditorBlur(quill) {
          debugger
        if(quill.getLength() !== 1){
          this.$notify({
          title: '输入的内容是',
          dangerouslyUseHTMLString: true,
          message: this.content,
          duration: 1000
          });
        }
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.editor)
    }
  }
</script>

<style scoped>
.editor-wrap{
    height: 500px;
}
.quill-editor{
    height: 100%;
}
</style>
