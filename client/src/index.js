import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);


//==================================>
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );




                    //  <FilterContainer>
                    //    <Filter>
                    //        <FilterTitle>

                    //        </FilterTitle>
                    //    </Filter>
                    // </FilterContainer> */}

                    //  <FilterContainer>
                    //     <Filter>
                    //         <FilterTitle>Color</FilterTitle>
                    //         {product.color?.map((c) => (
                    //             <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                    //         ))}
                    //     </Filter>
                    //     <Filter>
                    //         <FilterTitle>Size</FilterTitle>
                    //         <FilterSize onChange={(e) => setSize(e.target.value)}>
                    //             {product.size?.map((s) => (
                    //                 <FilterSizeOption key={s}>{s}</FilterSizeOption>
                    //             ))}
                    //         </FilterSize>
                    //     </Filter>
                    // </FilterContainer> 