<script lang="ts">
  import { Editor, Viewer } from 'bytemd';
  import gfm from '@bytemd/plugin-gfm';

  let value: string;
  const plugins: any[] = [
    gfm(),
    // Add more plugins here
  ];

  function handleChange(e) {
    value = e.detail.value;
  }
</script>

<template>

  <Editor sanitize={null} placeholder={null}
  editorConfig={null} locale={null} uploadImages={null}
  overridePreview={null}  value={value} plugins={plugins} on:change={handleChange} />
</template>