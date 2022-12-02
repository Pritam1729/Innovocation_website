import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import Sort from "./components/Sort";
import Genre from "./components/Genre";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import "./Happy.css";

const base_url = process.env.REACT_APP_API_URL;

function Happy() {
	const [obj, setObj] = useState({});
	const [sort, setSort] = useState({ sort: "rating", order: "desc" });
	const [filterGenre, setFilterGenre] = useState([]);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const getAllMovies = async () => {
			try {
				const url = `${base_url}?page=${page}&sort=${sort.sort},${
					sort.order
				}&genre=${filterGenre.toString()}&search=${search}`;
				const { data } = await axios.get(url);
				setObj(data);
			} catch (err) {
				console.log(err);
			}
		};

		getAllMovies();
	}, [sort, filterGenre, page, search]);

	return (
		<div className="wrapper">
			<div className="container">
				<div className="head">
					<img src="https://img.freepik.com/free-vector/innovation-education-logo-template-vector-with-atom-science-graphic_53876-125986.jpg?size=338&ext=jpg2" alt="logo" className="logo" />
					<a href = "/Home" className = "head_home_link"><b>Home</b></a>
					{/* <a href = "#" className = "head_course_link"><b>Courses</b></a> */}
					<Search setSearch={(search) => setSearch(search)} />
				</div>
				<div className="body">
					<div className="table_container">
						<Table movies={obj.movies ? obj.movies : []} />
						<Pagination
							page={page}
							limit={obj.limit ? obj.limit : 0}
							total={obj.total ? obj.total : 0}
							setPage={(page) => setPage(page)}
						/>
					</div>
					<div className="filter_container">
						<Sort sort={sort} setSort={(sort) => setSort(sort)} />
						<Genre
							filterGenre={filterGenre}
							genres={obj.genres ? obj.genres : []}
							setFilterGenre={(genre) => setFilterGenre(genre)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Happy;