<template>
<div class="hello">
    <div v-for="post in posts" :key="post.id">
    {{post.content}}
    </div>
</div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    name: "Post",
    apollo: {
        posts: gql`query {
            posts  {
                content
            }
        }`
    },
    props: {
        msg: String
    }
};
</script>