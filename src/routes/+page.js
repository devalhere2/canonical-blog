export const load = async() => {
    const fetchData = async () => {
        const response = await fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json');
        const Data = await response.json();
        return Data;
    }
    
    return {
        posts: fetchData()
    }
}