import Button from "./Button";
import Card from "./Card";

function HomePage() {
  return (
    <div className="root">
      <div className="bulleHomePage">
        <div className="bulleHomePage">
          <h1 className="title">
            LET'S <br /> EXPLORE <br /> UNIQUE <br /> ITEMS.
          </h1>
          <Button />
        </div>
        <img
          className="laFrisee"
          src="https://s3-alpha-sig.figma.com/img/3796/7b7e/82652d9341b4f18f0ed3fd2220f30206?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bInMOz6LdxtpCRc7PhDuOI6uxXlviLTw5ke68iH~PEQgawqJr6TJMSCRga9uEr~SvVq71xVy-w5EgfwDtyf5dZ8Kbqy-5tCI0D4f42M3ftDfveu7uSxf767AqrBISPwbBIqOqy-J5aL7JyWf3PFe8~~w55QzrRhUxXs~dQGTCHZ~t9MwVn85xoRLzHn-1Otv4wrI09m26rzLuCSu--1fDxGq3hPghsiIzeL7Z2pgkthKxyBcYSaSXKXfIClyzMDD3Ml2TkaJdTbELtiRaPkVlNo8vsw6yNBAf0IxMpsPPT5j~KtnZjqdun-n0nlQqWeGcMOLKUla5phenSqFxP~1yQ__ "
          alt="la dame frisée"
        />
        <div>
          <h2>
            <p className="h1">MENS WATCHES</p> <Button></Button>
          </h2>
        </div>

        <div className="element-Card">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
