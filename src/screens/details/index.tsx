import React, { useEffect, useState } from 'react';
import { Header, Movie, Container, Row, Genres } from './styles';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { IMovie, IDetails } from 'src/services/models';
import MovieService from "../../services/movies";


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

            <Row style={{ marginVertical: 16 }}>

              <Row style={{ marginRight: 16 }}>
                <Movie.Icon name="calendar-alt" solid={true} />
                <Movie.Text children={details.release_date} />
              </Row>

              <Row>
                <Movie.Icon name="clock" solid={false} />
                <Movie.Text children={`${Math.floor(details.runtime / 60)}h ${details.runtime % 60} min`} />
              </Row>

            </Row>

            <Movie.Section children="Sonopse" />
            <Movie.SectionBorder />

            {details.overview === "" ? (
              <Movie.Text children={`O filme ${details.title} não possui sinopse cadastrada`} />
            ) : (
                <Movie.Text children={details.overview} />
              )
            }

            <Movie.Text children={details.overview} />
            <Genres.Container>
              {details.genres.map(genre => (
                <Genres.Box>
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