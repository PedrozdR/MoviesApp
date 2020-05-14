import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator, View, RefreshControl, ListRenderItemInfo } from 'react-native';

import { Movie, Empty, Loading } from './styles';

import MovieService from "../../services/movies";
import { IMovie } from '../../services/models';
import MovieCard from '../../components/moviecard';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const navigation = useNavigation();

  useEffect(() => {
    getMovies(page);
  }, [])

  async function getMovies(page: number, shouldRefresh: boolean = false) {
    try {
      setLoading(true);
      const { data } = await MovieService.subscribe(page);
      setMovies(oldValue => (shouldRefresh ? data.results : [...oldValue, ...data.results]))
      setHasNext(data.results.length > 0);
      if (hasNext) {
        setPage(oldValue => oldValue + 1);
      }
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
      setRefresh(false);
    }
  }

  function handleRefresh() {
    setRefresh(true);
    setPage(1);
    getMovies(1, true)
  }

  function onEndReached() {
    if (loading) {
      return
    } else {
      getMovies(page);
    }
  }

  function renderFooter() {
    return (
      <Loading.Container >
        {loading && movies.length > 0 &&
          <Loading.Indicator size={30} />
        }
      </Loading.Container>
    )
  }

  function renderEmpty() {
    if (loading) {
      return <Loading.Indicator size={40} />;
    } else {
      return (
        <Empty.Container>
          {!loading && movies.length < 0 &&
            <Empty.Text children="Sem resultados" />
          }
        </Empty.Container>
      );
    }
  }

  function renderItem({ item }: ListRenderItemInfo<IMovie>) {
    return (
      <MovieCard thumb={item.poster_path} onPress={() => onDetails(item)} />
    )
  }

  function onDetails(item: IMovie) {
    navigation.navigate("Details", { item: item })
  }

  return (
    <Movie.List
      data={movies}
      renderItem={renderItem}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={renderEmpty}
      onEndReachedThreshold={.1}
      onEndReached={onEndReached}
      numColumns={2}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
      }
    />
  );
}
