import React from "react";
import { testData, exportFunc, members, Category } from "../data/exportData";
import { products } from "../data/productdata";
export default function D_ExportData() {
  return (
    <div>
      <h3>와부에서 제공하는 데이터를 가져와서 사용</h3>

      <p>testData: {testData}</p>
      <p>exportFunc :{exportFunc()}</p>

      <table>
        {members.map((member) => {
          return (
            <tr key="member.userNo">
              {Object.values(member).map((v) => (
                <td>{v}</td>
              ))}
            </tr>
          );
        })}
      </table>
      <h3>productdata 출력</h3>
      <table>
        {products.map((product) => {
          const pro = Object.values(product).reduce((p, v) => `${p} ${v}`);
          return (
            <tr key="product.id">
              <td>{pro}</td>
            </tr>
          );
        })}
      </table>

      <table>
        <tbody>
          {products.map((product) => {
            const pro = Object.values(product).join(" ");
            return (
              <tr key="product2.id">
                <td>{pro}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <select id="cotegory">
        {Category.map((v, i) => (
          <option key={`${v}_${i}`} value={v}>
            {v}
          </option>
        ))}
      </select>
      <input type="search" />
    </div>
  );
}
