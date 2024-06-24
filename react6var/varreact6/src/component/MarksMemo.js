import React from "react";

function MarksMemo(props) {
  let telMarks = Number(props.telMarks);
  let hinMarks = Number(props.hinMarks);
  let engMarks = Number(props.engMarks);
  let mathMarks = Number(props.mathMarks);
  let sciMarks = Number(props.sciMarks);
  let socMarks = Number(props.socMarks);

  let totMarks =
    telMarks + hinMarks + engMarks + mathMarks + sciMarks + socMarks;
  let percentage = (totMarks / 600) * 100;
  return (
    <div>
      <table>
        <caption>
          <h2>{props.name}</h2>
        </caption>
        <thead>
          <tr>
            <th>Subjects</th>
            <th>Max.Marks</th>
            <th>Marks Secured</th>
            <th>Results</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>TELUGU</th>
            <td>100</td>
            <td>{telMarks}</td>
            <td>{telMarks >= 35 ? "PASS" : "FAIL"}</td>
            <td>GOOD</td>
          </tr>
          <tr>
            <th>HINDI</th>
            <td>100</td>
            <td>{hinMarks}</td>
            <td>{hinMarks >= 35 ? "PASS" : "FAIL"}</td>
            <td>GOOD</td>
          </tr>
          <tr>
            <th>ENGLISH</th>
            <td>100</td>
            <td>{engMarks}</td>
            <td>{engMarks >= 35 ? "PASS" : "FAIL"}</td>
            <td>GOOD</td>
          </tr>
          <tr>
            <th>MATHS</th>
            <td>100</td>
            <td>{mathMarks}</td>
            <td>{mathMarks >= 35 ? "PASS" : "FAIL"}</td>
            <td>GOOD</td>
          </tr>
          <tr>
            <th>SCIENCE</th>
            <td>100</td>
            <td>{sciMarks}</td>
            <td>{sciMarks >= 35 ? "PASS" : "FAIL"}</td>
            <td>GOOD</td>
          </tr>
          <tr>
            <th>SOCIAL</th>
            <td>100</td>
            <td>{socMarks}</td>
            <td>{socMarks >= 35 ? "PASS" : "FAIL"}</td>
            <td>GOOD</td>
          </tr>
        </tbody>
        <tfoot>
          <th>TOTAL</th>
          <td>600</td>
          <td>
            {totMarks} ({percentage.toFixed(2)}%)
          </td>
          <td></td>
        </tfoot>
      </table>
    </div>
  );
}

export default MarksMemo;
