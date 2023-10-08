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
<h1>
    {#each posts as Post}
        <p></p>
    {/each}
</h1>
<div class="blogbody">
    <div class="blog">
        <div class="p-card">
            <img class="p-card__thumbnail" src="https://assets.ubuntu.com/v1/dca2e4c4-raspberry-logo.png" alt="">
            <hr class="u-sv1">
            <h3>Raspberry Pi2 and Pi3</h3>
            <p class="p-card__content">For fun, for education and for profit, the RPi makes device development personal and entertaining. With support for both the Pi2 and the new Pi3, Ubuntu Core supports the world’s most beloved board.</p>
          </div>
    </div>
    <div class="blog">
        <div class="p-card">
            <img class="p-card__thumbnail" src="https://assets.ubuntu.com/v1/dca2e4c4-raspberry-logo.png" alt="">
            <hr class="u-sv1">
            <h3>Raspberry Pi2 and Pi3</h3>
            <p class="p-card__content">For fun, for education and for profit, the RPi makes device development personal and entertaining. With support for both the Pi2 and the new Pi3, Ubuntu Core supports the world’s most beloved board.</p>
          </div>
    </div>
    <div class="blog">
        <div class="p-card">
            <img class="p-card__thumbnail" src="https://assets.ubuntu.com/v1/dca2e4c4-raspberry-logo.png" alt="">
            <hr class="u-sv1">
            <h3>Raspberry Pi2 and Pi3</h3>
            <p class="p-card__content">For fun, for education and for profit, the RPi makes device development personal and entertaining. With support for both the Pi2 and the new Pi3, Ubuntu Core supports the world’s most beloved board.</p>
          </div>
    </div>
    
</div>
</body>

<style>
.blogbody{
    margin: 50px;
    background-color: aqua;
    display:flex;
    justify-content: space-around;   
}
.blog{
    
    
    width: 25vw;
}
</style>