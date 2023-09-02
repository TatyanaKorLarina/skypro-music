import { useParams } from 'react-router-dom'
import { categories } from '../../components/playlist/Playlist'

export const CategoryPage = () => {
    const params = useParams()
    const category = categories.find((category) => category.id === Number(params.id))
    return (
      <section>
        <h1>CategoryPage {category.id}</h1>
        <h3>{category.playlistName}</h3>
      </section>
    );
  };