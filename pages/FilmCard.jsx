export default function FilmCard({ data }) {
    if (!data?.Search) return <div>Cannot find film data</div>;
    const search = data.Search;
    return <div> {search.map((el, i) =>
        <fieldset key={i}>
            <legend>{el.Title}</legend>
            <img src={el.Poster}></img>
        </fieldset>)
    }</div>

}