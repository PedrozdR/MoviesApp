import React, { useEffect, useState } from 'react';
import { Header, Movie, Container, Genres, Infos } from './styles';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { IMovie, IDetails } from 'src/services/models';
import MovieService from "../../services/movies";
import moment from 'moment';


type DetailsParams = {
  Details: { item: IMovie };
};
type DetailsRouteProp = RouteProp<DetailsParams, 'Details'>;



export default function Details() {
  const [thumb, setThumb] = useState<string>("");
  const [details, setDetails] = useState<IDetails>();
  const navigation = useNavigation();
  const route = useRoute<DetailsRouteProp>();


  useEffect(() => {
    setThumb(route.params.item.poster_path);
    getDetails(route.params.item.id);
  }, [route])

  async function getDetails(movie_id: number) {
    try {
      const { data } = await MovieService.getBy(movie_id);
      setDetails(data);

    } catch (error) {
      console.warn(error);

    }
  }

  return (
    <Container>
      {details &&
        <>
          <Header.Container>
            <Header.Button onPress={() => navigation.goBack()}>
              <Header.Icon name="arrow-left" size={20} />
            </Header.Button>
          </Header.Container>
          <Movie.Image source={{ uri: `https://image.tmdb.org/t/p/w500/${thumb}` }} />

          <Movie.Content>
            <Movie.Title>{details.title}</Movie.Title>
            <Movie.Text children={details.tagline} />

            <Infos.Container >

              <Infos.Content >
                <Movie.Icon name="calendar-alt" solid={true} />
                <Movie.Text children={moment(details.release_date).format("DD/MM/YYYY")} />
              </Infos.Content>

              <Infos.Content>
                <Movie.Icon name="clock" solid={false} />
                <Movie.Text children={`${Math.floor(details.runtime / 60)}h ${details.runtime % 60} min`} />
              </Infos.Content>

              <Infos.Content >
                <Movie.Icon name="star" solid={true} />
                <Movie.Text children={details.vote_average} />
              </Infos.Content>


            </Infos.Container>

            <Movie.Section children="Sonopse" />
            <Movie.SectionBorder />

            {details.overview === "" ? (
              <Movie.Text children={`O filme ${details.title} não possui sinopse cadastrada`} />
            ) : (
                <Movie.Overview children={details.overview} />
              )
            }


            <Genres.Container>
              {details.genres.map(genre => (
                <Genres.Box key={genre.id}>
                  <Genres.Title children={genre.name} />
                </Genres.Box>
              ))}
            </Genres.Container>

          </Movie.Content>

        </>
      }
    </Container>

  )
}