import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaBookmark, FaHeart, FaList } from 'react-icons/fa'
import { IoIosStar } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../components/API'
import Person from '../components/Person'
import Video from '../components/Video'
import texr from '../img/ffff.svg'
import zag from '../img/none.svg'
//
const MovieDetails = () => {
	const [blo, setBlo] = useState(false)
	const [hover, setHover] = useState(false)
	const [heart, setHeart] = useState(false)
	const [book, setBook] = useState(false)
	const [star, setStar] = useState(false)

	let [movie, setMovie] = useState([])
	const { id } = useParams()
	async function GetMovieDetails(key) {
		const res = await axios(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
		)
		const { data } = await res
		setMovie(data)
	}
	useEffect(() => {
		setTimeout(() => {
			GetMovieDetails(API_KEY)
		}, 2000)
	}, [])
	return (
		<div className='con'>
			<div
				id='moveDetaila'
				style={{
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundImage: ` linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%), url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}")`
				}}
			>
				<div className='container'>
					<div
						className='bloo2 '
						style={{
							display: blo ? 'block' : 'none'
						}}
						onClick={() => {
							setBlo(false)
						}}
					></div>

					<div className='movieDetailss'>
						<div className='details'>
							<div
								className='bl'
								style={{
									display: hover ? 'block' : 'none',
									marginLeft: '40px'
								}}
							>
								{' '}
								<h3>Расширить.?</h3>
							</div>
							<div
								className='blo'
								style={{
									display: blo ? 'block' : 'none'
								}}
							>
								{' '}
								<h1
									onClick={() => {
										setBlo(false)
									}}
									style={{
										cursor: ' pointer'
									}}
								>
									X
								</h1>
								{
									<div className='imggg'>
										<img
											style={{ marginLeft: '100px' }}
											src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
											alt='img'
										/>
										<div className='text'>
											<h1>
												<span>Name : </span>
												{movie.title}
											</h1>
											<h3>
												{' '}
												<span>Popularity : </span>
												{movie.popularity}
											</h3>
										</div>
									</div>
								}
							</div>
						</div>
						{movie.length === 0 ? (
							<img src={zag} alt='img' />
						) : (
							<img
								onMouseMove={() => setHover(true)}
								onMouseOut={() => setHover(false)}
								onClick={() => setBlo(true)}
								src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
								alt='img'
							/>
						)}
						{movie.length === 0 ? (
							<img style={{ marginLeft: '100px' }} src={texr} alt='img' />
						) : (
							<div className='details-text'>
								<h1>{movie.title}</h1>
								<div className='hh33'>
									<h4
										style={{
											margin: '10px 0'
										}}
									>
										{movie.release_date}{' '}
										<span>({movie.original_language})</span>
									</h4>
									{movie.genres?.map(el => (
										<h3>{el.name}</h3>
									))}
									<h3>
										{Math.floor(movie.runtime / 60)}h{' '}
										{Math.round(movie.runtime % 60)}h
									</h3>
								</div>
								<div className='iconss'>
									<a href='#'>
										<FaList />
									</a>
									<a
										onClick={() => {
											setHeart(!heart)
										}}
										style={{
											color: heart ? 'red' : 'white'
										}}
										href='#'
									>
										<FaHeart />
									</a>
									<a
										onClick={() => {
											setBook(!book)
										}}
										style={{
											color: book ? 'grey' : 'white'
										}}
										href='#'
									>
										<FaBookmark />
									</a>
									<a
										onClick={() => {
											setStar(!star)
										}}
										style={{
											color: star ? 'yellow' : 'white'
										}}
										href='#'
									>
										<IoIosStar />
									</a>
								</div>

								<h3 className='h'>{movie.tagline}</h3>
								<h1>
									{Math.round(movie.vote_average * 10)}% <span>Рейтинг</span>
								</h1>
								<h2
									style={{
										margin: '20px 0'
									}}
								>
									Обзор
								</h2>

								<p>{movie.overview}</p>
							</div>
						)}
					</div>

					{/* <div className="bgr">
            {
                    <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`} alt="img" />
                }
            </div> */}
				</div>
			</div>
			<Person text={id} />
			<Video movieId={id} />
		</div>
	)
}

//https://api.themoviedb.org/3/movie/${movieId}?api_key=api&language=en-US
export default MovieDetails
