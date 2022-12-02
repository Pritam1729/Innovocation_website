import styles from "./styles.module.css";

import { Link } from "react-router-dom";


const Table = ({ movies }) => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.title_tab}>Cources (Reviews)</p>
				<p className={styles.genre_tab}>Types</p>
				<p className={styles.rating_tab}>Price</p>
			</div>
			{movies.map((movie) => (
				<div>
					
					<Link to = {'/courseInfo'} state = {{course : movie.name,rate : movie.rating,image:movie.img,price : movie.price,description: movie.description,people : movie.people,users : movie.users,features : movie.features,hour : movie.hour , articles : movie.articles,genre : movie.genre}} className = "linking">
					<div className={styles.movie} key={movie._id}>
						<div className={styles.name_container}>
							<img src={movie.img} alt="movie" className={styles.course_img} />
							<p className={styles.course_title}>
								{movie.name}({movie.rating})
							</p>
						</div>
						<div className={styles.course_container}>
							{movie.genre.map((genre, index) => (
								<p key={genre} className={styles.course_genre}>
									{genre}
									{index !== movie.genre.length - 1 && "/"}
								</p>
							))}
						</div>
						<div className={styles.price_container}>
							<img
								src="data:image/png;base64,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"
								alt="symbol"
								className={styles.star_img}
							/>
							<p className={styles.price_rating}>{movie.price}</p>
						</div>
					</div>
					</Link>
					


				</div>
			))}
		</div>
	);
};

export default Table;