import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useLoggedInUser } from "../../hooks/auth.hooks";
import { useGetAllMovies } from "../../hooks/movie.hook";
import { useState } from "react";
import { useGetShowsByMovieId } from "../../hooks/theatre.hook";
import "./user.css";
import moment from "moment";
import { useMemo } from "react";

const UserDashboard = () => {
  const { data: user } = useLoggedInUser();
  const { data: movies, isLoading } = useGetAllMovies();
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [selctedShowId, setSelectedShowId] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const { data: shows } = useGetShowsByMovieId(selectedMovieId);

  const showObj = useMemo(() => {
    if (!shows || !selctedShowId) return null;
    const show = shows?.find((e) => e._id === selctedShowId);
    return show;
  }, [selctedShowId, shows]);

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div className="user_dashboard_container" style={{ padding: "20px" }}>
      <div>
        <h1>Hi {user.firstName}</h1>
        <div className="movie_display_grid">
          {movies.map((movie) => (
            <div
              style={{ marginTop: "10px" }}
              key={movie._id}
              onClick={() => setSelectedMovieId(movie._id)}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {movie.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div>
        {shows && (
          <div>
            {shows.map((show) => (
              <div
                style={{ marginTop: "10px" }}
                onClick={() => setSelectedShowId(show._id)}
                key={show._id}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {moment(show.startTimestamp).format(
                          "DD/MM/YY [at] hh:mm A"
                        )}{" "}
                        to <br />
                        {moment(show.endTimestamp).format(
                          "DD/MM/YY [at] hh:mm A"
                        )}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        INR {show.price}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        At {show.theatreHallId.theatreId.name} -{" "}
                        {show.theatreHallId.theatreId.plot} -
                        {show.theatreHallId.theatreId.street}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        )}{" "}
      </div>
      <div>
        {showObj && (
          <div className="seats_container">
            {new Array(showObj.theatreHallId.seatingCapacity)
              .fill(1)
              .map((seat, index) => (
                <span
                  className={
                    index + 1 === selectedSeat ? "selected-seat" : null
                  }
                  onClick={() => setSelectedSeat(index + 1)}
                  key={index}
                >
                  {index + 1}
                </span>
              ))}
          </div>
        )}
        {selectedSeat && (
          <Button
            color="error"
            variant="outlined"
            onClick={() => setSelectedSeat(null)}
          >
            Clear
          </Button>
        )}
        {selectedSeat && <Button variant="contained">Book Now</Button>}
      </div>
    </div>
  );
};
export default UserDashboard;
