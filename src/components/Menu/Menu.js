import React from "react";
import "./Menu.css";

function Menu({setLineWidth, setLineColor, setCurrent, current}) {
  return (
    <React.Fragment>
      <div className="menu-container">
        <div
          className="icon-container"
          style={{
            filter:
            current === "pencil" ? "invert(1) brightness(1.8)" : null
          }}
          onClick={() => setCurrent("pencil")}
        >
          <img
            className="icons"
            src="https://whiteboard.explaineverything.com/c18407ddd7773a8eb7753f6ca7e8300a.svg"
            alt="pencil"
            title="Pencil"
          />
        </div>
        <div
          className="icon-container"
          style={{
            filter:
            current === "eraser" ? "invert(1) brightness(1.8)" : null
          }}
          onClick={() => setCurrent("eraser")}
        >
          <img
            className="icons"
            src="https://whiteboard.explaineverything.com/3ed3ea56605afb8f055e980ae724390f.svg"
            alt="eraser"
            title="Eraser"
          />
        </div>
      </div>
      <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYxIiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNC43MyAxMi40OTVjMCAzLjA0NiAxLjE2IDUuMjAyIDQuNjA3IDUuMjAyIDIuNDY3IDAgMy44NjQtMS41MjMgMy44NjQtMS41MjNsLjIwOC43NDdjLjA4OS4yODcuMjA4LjQ4OC41MzUuNDg4aC41NjRjLjI5NyAwIC41NjUtLjI1OC41NjUtLjU0NlY2LjQ2YzAtLjI4Ny0uMjY3LS41NDYtLjU2NS0uNTQ2aC0uOTIxYy0uMjk3IDAtLjU2NS4yNTktLjU2NS41NDZ2Ny42NzNzLTEuMjc4IDEuNjM4LTMuNTM2IDEuNjM4Yy0xLjY2NSAwLTIuNjc1LTEuMDYzLTIuNjc1LTMuMjQ3VjYuNDZjMC0uMjg3LS4yNjgtLjU0Ni0uNTY1LS41NDZoLS45NWMtLjI5OCAwLS41NjYuMjU5LS41NjYuNTQ2djYuMDM1eiIgZmlsbD0iIzA4QkQ4MCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjYuMDAxIDEwLjExYy0zLjA2IDAtNC43NTUgMS42MzgtNC43NTUgMy44MjIgMCAyLjMgMS41NzUgMy43NjUgMy42NTYgMy43NjUgMS44NDIgMCAzLjA2LS44OSAzLjY4NS0xLjQ5NGwuMjM4Ljc3NmMuMDg5LjI1OC4xNzguNDMuNTA1LjQzaC41NjVjLjI5NyAwIC41NjQtLjI1OC41NjQtLjU0NXYtNi4zOGMwLTMuMzYzLS43NDMtNC44NTctMy43NzQtNC44NTctMi4yMyAwLTMuOTUzLjY2LTQuMTMxLjc0Ny0uMjY4LjExNS0uNDQ2LjI4OC0uMzI3LjYzMmwuMjM4LjcxOWMuMDg5LjI1OS4yNjcuNDAyLjU2NC4yODdhMTAuNzY0IDEwLjc2NCAwIDAxMy41NjctLjYzMmMxLjY5NCAwIDEuOTYxLjk3NyAxLjkzMSAzLjEwNCAwIDAtMS4yNDgtLjM3NC0yLjUyNi0uMzc0em0tLjc3MyA1Ljg2M2MtMS4yNzggMC0yLjA4LS44OTEtMi4wOC0yLjA0IDAtMS40OTUgMS4xODgtMi4zIDIuODUzLTIuMyAxLjMwNyAwIDIuMTQuMjU5IDIuNDk2LjQ2djIuMjdjLS41MDUuNzE5LTEuNzgzIDEuNjEtMy4yNjkgMS42MXoiIGZpbGw9IiMyRDgxRjciLz48cGF0aCBkPSJNNzMuMjI3IDExLjY5YzAgMy40NSAyLjc5MyA2LjAwNyA2LjA5MiA2LjAwNyAyLjAyMSAwIDMuNjU2LTEuMDM0IDQuNTQ3LTIuNDE0LjE3OS0uMjg3LjA5LS42MDMtLjIwOC0uODA1bC0uMzI3LS4yM2MtLjMyNy0uMjMtLjUzNS0uMjg3LS44OTEuMDU4LS42ODQuNjMyLTEuMzY3IDEuNDk0LTMuMTUgMS40OTQtMi4yMyAwLTMuOTI0LTEuODM5LTMuOTI0LTQuMTM4IDAtMi4zIDEuNzI0LTQuMDggMy45NTMtNC4wOCAxLjE2IDAgMi4xNC41NDUgMi43MzQgMS4yMDYuMjY4LjIzLjQxNi41MTcuODYyLjExNWwuNTY1LS40NmMuMjY3LS4yLjMyNy0uNTQ2LjExOS0uODA0LTEuMDctMS4zMjItMi40NjctMi4wMTItNC4yNS0yLjAxMi0zLjI0IDAtNi4xMjIgMi42NzMtNi4xMjIgNi4wNjR6IiBmaWxsPSIjMkQ4MUY3Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05MS40OCAxMC4xMWMtMy4wNjEgMC00Ljc1NSAxLjYzOC00Ljc1NSAzLjgyMiAwIDIuMyAxLjU3NSAzLjc2NSAzLjY1NSAzLjc2NWE1LjIzIDUuMjMgMCAwMDMuNjg1LTEuNDk0bC4yMzguNzc2Yy4wOS4yNTguMTc4LjQzLjUwNS40M2guNTY1Yy4yOTcgMCAuNTY1LS4yNTguNTY1LS41NDV2LTYuMzhjMC0zLjM2My0uNzQzLTQuODU3LTMuNzc1LTQuODU3LTIuMjI5IDAtMy45NTIuNjYtNC4xMy43NDctLjI2OC4xMTUtLjQ0Ny4yODgtLjMyOC42MzJsLjIzOC43MTljLjA5LjI1OS4yNjguNDAyLjU2NS4yODdhMTAuNzY1IDEwLjc2NSAwIDAxMy41NjYtLjYzMmMxLjY5NCAwIDEuOTYyLjk3NyAxLjkzMiAzLjEwNCAwIDAtMS4yNDgtLjM3NC0yLjUyNi0uMzc0em0tLjc3NCA1Ljg2M2MtMS4yNzggMC0yLjA4LS44OTEtMi4wOC0yLjA0IDAtMS40OTUgMS4xODgtMi4zIDIuODUzLTIuMyAxLjMwNyAwIDIuMTQuMjU5IDIuNDk2LjQ2djIuMjdjLS41MDUuNzE5LTEuNzgzIDEuNjEtMy4yNyAxLjYxem0xMy43MDUtMTAuMzQ3Yy0zLjU2NiAwLTUuNzA2IDIuNjQ0LTUuNzA2IDYuMDA3IDAgMy4zMDUgMi4zNzggNi4wNjQgNS40MDkgNi4wNjQgMi4yMjkgMCAzLjY1Ni0xLjUyMyAzLjY1Ni0xLjUyM2wuMTc4Ljc3NWMuMDU5LjI1OS4yMzguNDYuNTA1LjQ2aC42MjRjLjI5OCAwIC41NjUtLjI1OC41NjUtLjU0NlYuNTQ2YzAtLjI4Ny0uMjY3LS41NDYtLjU2NS0uNTQ2aC0uOTIxYy0uMjk3IDAtLjU2NS4yNTktLjU2NS41NDZ2NS44MjhzLTEuMjE4LS43NDgtMy4xOC0uNzQ4em0tLjA5IDEwLjI2Yy0yLjE2OSAwLTMuNTM2LTEuOTgzLTMuNTM2LTQuMjI1IDAtMi4yOTkgMS4zMDctNC4xMSAzLjg5My00LjExIDEuNjM1IDAgMi44ODMuNjkgMi44ODMuNjl2NS43NDhzLTEuMSAxLjg5Ny0zLjI0IDEuODk3em0xMy45MTItMTAuMjU5Yy0zLjU5NiAwLTUuODI1IDIuNzg4LTUuODI1IDYuMDM1IDAgMy4zMDUgMi4yMjkgNi4wMzUgNS44MjUgNi4wMzUgMi4wNTEgMCAzLjY1Ni0uNzc2IDQuMzY5LTEuMzIyLjQ0Ni0uMzE2LjMyNy0uNDg4LjExOS0uNzQ3YTQ2LjQ1NyA0Ni40NTcgMCAwMS0uMjUzLS4zMyAyOS43MzkgMjkuNzM5IDAgMDAtLjI1Mi0uMzMxYy0uMjE3LS4yODgtLjM4NS0uMTk0LS43MjgtLjAwMWwtLjEwNC4wNThjLS42ODQuNDAzLTEuNjk0Ljg2My0yLjk0My44NjMtMi4xMSAwLTMuODYzLTEuODExLTMuOTgyLTMuNzM2aDguNTU5YS41NC41NCAwIDAwLjUzNS0uNDg5Yy4wMy0uMjAxLjA2LS41NzUuMDYtLjc3NiAwLTMuMDE3LTIuMjU5LTUuMjU5LTUuMzgtNS4yNTl6bTMuMzI3IDQuOTE0aC03LjA3M2MuMjA4LTEuNzgyIDEuNzU0LTMuMTYxIDMuNzQ1LTMuMTYxIDEuODEzIDAgMy4yMzkgMS40OTQgMy4zMjggMy4xNjF6IiBmaWxsPSIjMkQ4MUY3Ii8+PHBhdGggZD0iTTEyNi4zODEgMTYuODY0YzAgLjI4Ny4yNjcuNTQ2LjU2NS41NDZoLjkyMWMuMjk3IDAgLjU2NS0uMjU5LjU2NS0uNTQ2VjkuMTlzMS4yNzctMS42MzkgMy4zODgtMS42MzljMS44MTIgMCAyLjgyMyAxLjA2NCAyLjgyMyAzLjI0OHY2LjA2NGMwIC4yODcuMjY3LjU0Ni41NjUuNTQ2aC45NTFjLjI5NyAwIC41NjQtLjI1OS41NjQtLjU0NlYxMC44YzAtLjYwNC0uMDU5LTEuMTUtLjE0OC0xLjYzOC40MTYtLjM3NCAxLjY5NC0xLjYxIDMuNjI2LTEuNjEgMS43MjMgMCAyLjY3NCAxLjA5MiAyLjY3NCAzLjI0OHY2LjA2NGMwIC4yODcuMjY4LjU0Ni41NjUuNTQ2aC45NTFjLjI5NyAwIC41NjUtLjI1OS41NjUtLjU0NlYxMC44YzAtMi45ODktMS4xNTktNS4xNzMtNC42MDctNS4xNzMtMi4zNzcgMC00LjI3OSAxLjc1My00LjQyOCAxLjg2OC0uNzczLTEuMjA3LTIuMDUxLTEuODY4LTMuODA0LTEuODY4LTIuNDY3IDAtMy44NjQgMS41MjMtMy44NjQgMS41MjNsLS4yNjctLjg5Yy0uMDYtLjIzLS4yMDgtLjM0Ni0uNDc2LS4zNDZoLS41NjRjLS4yOTggMC0uNTY1LjI1OS0uNTY1LjU0NnYxMC40MDR6bTI2LjkzOC41MTZsLTIuNDA3IDUuOTAyYy0uMjA4LjQwMi4wMy43MTguNDc1LjcxOGgxLjFjLjIwOCAwIC40MTYtLjE3Mi41MDUtLjM0NWw3LjcyNy0xNy4wOGMuMjA4LS4zNzQgMC0uNjYtLjQ0Ni0uNjZoLTEuMTI5YS42MDQuNjA0IDAgMDAtLjUwNS4zMTVsLTQuMTYxIDguNzk0LTQuNDI4LTguNzk0YS41NjguNTY4IDAgMDAtLjUwNi0uMzE2aC0xLjMwN2MtLjQ0NiAwLS42MjQuMjU5LS40NDYuNjMybDUuNTI4IDEwLjgzNXoiIGZpbGw9IiMyRDgxRjciLz48cGF0aCBkPSJNNDcuODM4IDE2Ljg2NGMwIC4yODcuMjY3LjU0Ni41NjUuNTQ2aC45MmMuMjk4IDAgLjU2Ni0uMjU5LjU2Ni0uNTQ2VjkuMTlzMS42MDQtMS42MzkgMy44MzMtMS42MzljMS42NjUgMCAyLjY3NSAxLjA2NCAyLjY3NSAzLjI0OHY2LjA2NGMwIC4yODcuMjY4LjU0Ni41NjUuNTQ2aC45NWMuMjk4IDAgLjU2Ni0uMjU5LjU2Ni0uNTQ2VjEwLjhjMC0yLjk4OS0xLjE2LTUuMTczLTQuNjA3LTUuMTczLTIuNDY3IDAtNC4xNiAxLjUyMy00LjE2IDEuNTIzbC0uMjY4LS44OWMtLjA2LS4yMy0uMjA4LS4zNDYtLjQ3Ni0uMzQ2aC0uNTY0Yy0uMjk4IDAtLjU2NS4yNTktLjU2NS41NDZ2MTAuNDA0eiIgZmlsbD0iIzA4QkQ4MCIvPjxwYXRoIGQ9Ik0uMTUyIDIuMjMxQzEuMjU2IDkuMDA2IDcuMzI3IDE0LjE4OCAxNC42NSAxNC4xODhjNy4yNSAwIDEzLjI3LTUuMDc3IDE0LjQ2My0xMS43NTIuMTUzLS42MjYuMjE2LTEuMTI3LjE5Ny0xLjU1NmEuODUuODUgMCAwMC0uODctLjg3MkguODczYS44NS44NSAwIDAwLS44Ny44NzFIMGwuMDAyLjAzM2MtLjAxMy4zNzQuMDM1LjgwMi4xNSAxLjMyeiIgZmlsbD0iIzJEODFGNyIvPjxwYXRoIGQ9Ik0yMS44NTYgMjIuODY3Yy0uNTUzLTMuMzg4LTMuNTg4LTUuOTc5LTcuMjUtNS45NzktMy42MjQgMC02LjYzNSAyLjU0LTcuMjMxIDUuODc2YTIuNzk0IDIuNzk0IDAgMDAtLjA5OC43NzhjMCAuMjQ2LjE4Mi40MzYuNDM0LjQzNmgxMy43ODRjLjI1MyAwIC40MzUtLjE5LjQzNS0uNDM1aC4wMDJsLS4wMDEtLjAxN2EyLjcgMi43IDAgMDAtLjA3NS0uNjZ6IiBmaWxsPSIjMDhCRDgwIi8+PC9zdmc+"
          alt="unacademy"
          style={{maxHeight: '30px'}}
        />
      <div className="menu-options">
        <fieldset>
          <legend style={{ textTransform: "uppercase" }}>
            {current}
          </legend>
          <label for="size">Choose size:</label>
          <select name="size" onChange={(e)=>setLineWidth(e.target.value)}>
            <option value="1">1px</option>
            <option value="3">3px</option>
            <option value="5">5px</option>
          </select>
          &nbsp;&nbsp;
          {current === "pencil" &&
          <React.Fragment>
          <label for="color">Choose color:</label>
          <select name="color" onChange={(e)=>setLineColor(e.target.value)}>
          <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
          </select>
          </React.Fragment>
        }
        </fieldset>
      </div>
    </React.Fragment>
  );
}

export default Menu;
