import { useLocation } from "react-router-dom";

function Blogs() {
  //   const { title } = useParams();
  const location = useLocation();

  //   const [blogData, setblogData] = useState("");

  //   useEffect(() => {
  //     const Data = BlogData.filter((blog) => blog.title === title);
  //     setblogData(Data[0].body);
  //   }, []);

  return (
    <div>
      <h1>{location.state.title} Page</h1>
      <p>{location.state.body.slice(0, 50)}</p>
      <br />
      <p>{location.state.body.slice(51, 200)}</p>
    </div>
  );
}

export default Blogs;
