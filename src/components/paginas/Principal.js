import Card from '../Card/Card'
import {PainelVideos} from "./styled"

function Home(props) {
    console.log(props.reproduz)
    return(
        <>
        <PainelVideos>

            <Card reproduz={props.reproduz} 
            link={'https://picsum.photos/400/400?a=1'} 
            titulo={'Título do vídeo 1'}/>

            <Card reproduz={props.reproduz} 
            link={'https://picsum.photos/400/400?a=2'} 
            titulo={'Título do vídeo 2'}/>

            <Card reproduz={props.reproduz} 
            link={'https://picsum.photos/400/400?a=3'} 
            titulo={'Título do vídeo 3'}/>

            <Card reproduz={props.reproduz} 
            link={'https://picsum.photos/400/400?a=4'} 
            titulo={'Título do vídeo 4'}/>

            <Card reproduz={props.reproduz} 
            link={'https://picsum.photos/400/400?a=5'} 
            titulo={'Título do vídeo 5'}/>

            <Card reproduz={props.reproduz} 
            link={'https://picsum.photos/400/400?a=6'} 
            titulo={'Título do vídeo 6'}/>

            <Card reproduz={props.reproduz} 
            link={'https://picsum.photos/400/400?a=7'} 
            titulo={'Título do vídeo 7'}/>

            <Card reproduz={props.reproduz} 
            link={'https://picsum.photos/400/400?a=8'} 
            titulo={'Título do vídeo 8'}/>

            <Card reproduz={props.reproduz} 
            link={'https://picsum.photos/400/400?a=9'} 
            titulo={'Título do vídeo 9'}/>

            <Card reproduz={props.reproduz} 
            link={'https://picsum.photos/400/400?a=10'} 
            titulo={'Título do vídeo 10'}/>
        </PainelVideos>
        </>
    )
}

export default Home