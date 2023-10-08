<script>

    import '../../dist/style.css';
    import Header from './header.svelte';
    export let data;
    console.log(data)
    let { posts } = data;
</script>

<body>

<Header /> 
<hr>

    

<div class="blogbody">
    {#each posts as Post,i}
    <div class="blog">
        <div class="p-card card">
            <h4>Post {i+1}</h4>
            <hr class="u-sv1">
            <img src="{Post.featured_media}" alt="">
            <h3 class="center">{Post.title.rendered}</h3>
            <h5 style="font-style: italic;">By <span style="color: blueviolet;">{Post["_embedded"]["author"][0]["name"]}</span> on {Post["_start_day"]}/{Post["_start_month"]}/{Post["_start_year"]}</h5>
            <hr>
            <h4 style="margin: 0;">
                Article 
            </h4>
          </div>
    </div>
    {/each}
    
</div>
</body>

<style>
.blogbody{
    margin: 50px;
    
    display:flex;
    justify-content: space-around;   
}
.blog{
    
    border-top: 3px solid purple;
    border-radius: 7px;
    width: 25vw;
}
.card{
    display: flex;
    flex-direction: column;
    height: 600px;
    border-radius: 7px;
}
.center{
    flex-grow: 1;
}
</style>