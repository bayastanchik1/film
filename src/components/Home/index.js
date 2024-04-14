import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_KEY } from '../API'
import Trend from '../Trend'
import { lenguageContext } from '../context'
const Home = () => {
	const [value, setValue] = useState('')
	const [popular, setPopular] = useState([])
	const [page] = useState(1)
	const { language } = useContext(lenguageContext)
	const nav = useNavigate()

	function getPopular(key) {
		axios(
			`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`
		).then(res => {
			setPopular(res.data.results)
		})
	}
	useEffect(() => {
		getPopular(API_KEY)
	}, [page, language])

	function randomBackgroundImage() {
		const randomIndex = Math.floor(Math.random() * popular.length)

		return popular[randomIndex]?.backdrop_path
	}

	return (
		<div id='home'>
			<div className='container'>
				<div className='home'>
					<div
						className='home-img'
						style={{
							backgroundImage: `url('https://image.tmdb.org/t/p/original/${randomBackgroundImage()}')`
						}}
					>
						<h1>Добро пожаловать.</h1>
						<h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
						<div className='btn-input'>
							<input
								onChange={e => setValue(e.target.value)}
								type='text'
								placeholder='Найти фильм, сериал, персону......'
							/>
							<button onClick={() => nav(`/movieSearch/${value}`)}>
								{' '}
								Search{' '}
							</button>
						</div>
					</div>
				</div>
				<Trend />
			</div>
		</div>
	)
}

export default Home
