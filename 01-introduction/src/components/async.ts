const GetUrlAsync = async () => {
    try {
        const request = await fetch('https://api.giphy.com/v1/gifs/random?api_key=iNMgJTWR401RoJzxEXFKvYT7O6vYlaSC&limit=10&offset=0');
        const response = await request.json();

        return response.data.images.original.url;
    }catch(error) {
        return `Ha ocurrido un error`;
    }   
}

export { GetUrlAsync } 