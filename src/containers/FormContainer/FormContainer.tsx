import React from "react";
import "./FormContainer.scss";

import InputQ1 from "./InputQ1";
import InputQ2 from "./InputQ2";
import BtnClearForm from "./BtnClearForm";
import BtnSubmitForm from "./BtnSubmitForm";

export const FormContainer = () => {
  return (
    <>
      <div>
        <InputQ1 />
        <InputQ2 />
      </div>

      <BtnSubmitForm />
      <BtnClearForm />
    </>
  );
};

// export default class FormContainer extends Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       newFormValue: {
//         Q1: "",
//         Q2: "",
//         T1: "",
//         T2: "",
//         V1: "",
//         V2: "",
//         M1: "",
//         M2: "",
//         work_device: "",
//         work_device_error: "",
//         exampleFormControlTextarea1: "",
//       },
//     };

//     // this.handleQ1 = this.handleQ1.bind(this);
//     // this.handleTextArea = this.handleTextArea.bind(this);
//     // this.handleInput = this.handleInput.bind(this);
//     // this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     // this.handleClearForm = this.handleClearForm.bind(this);
//   }

//   // handleInput(e: any) {
//   //   let value = e.target.value;
//   //   let name = e.target.name;
//   //   this.setState(
//   //     (prevState: any) => {
//   //       return {
//   //         newFormValue: {
//   //           ...prevState.newFormValue,
//   //           [name]: value,
//   //         },
//   //       };
//   //     },
//   //     () => console.log(this.state.newFormValue)
//   //   );
//   // }

//   // handleTextArea(e: any) {
//   //   console.log("Inside handleTextArea");
//   //   let value = e.target.value;
//   //   this.setState(
//   //     (prevState) => ({
//   //       newFormValue: {
//   //         ...prevState.newFormValue,
//   //         exampleFormControlTextarea1: value,
//   //       },
//   //     }),
//   //     () => console.log(this.state.newFormValue)
//   //   );
//   // }

//   // handleFormSubmit(e: any) {
//   //   // Form submission logic
//   //   e.preventDefault();
//   // }
//   // handleClearForm() {
//   //   this.setState({
//   //     newFormValue: {
//   //       Q1: "",
//   //       Q2: "",
//   //       T1: "",
//   //       T2: "",
//   //       V1: "",
//   //       V2: "",
//   //       M1: "",
//   //       M2: "",
//   //       work_device: "",
//   //       work_device_error: "",
//   //       exampleFormControlTextarea1: "",
//   //     },
//   //   });
//   // }

//   render() {
//     return (
//       <div>
//         <div className="InputWrapper">
//           <InputQ1 />
//           <InputQ1 />
//           <InputQ1 />

//           {/* <>
//             <Input
//               InputType={"number"}
//               name="Q1"
//               // title={'Q1'}
//               value={this.state.newFormValue.Q1}
//               placeholder={"Введите Q1"}
//               handleChange={this.handleInput}
//             />
//             <Input
//               InputType={"number"}
//               name="Q2"
//               // title={'Q2'}
//               value={this.state.newFormValue.Q2}
//               placeholder={"Введите Q2"}
//               handleChange={this.handleInput}
//             />
//           </> */}

//           {/* <>
//             <Input
//               InputType={"number"}
//               name="T1"
//               // title={'T1'}
//               value={this.state.newFormValue.T1}
//               placeholder={"Введите T1"}
//               handleChange={this.handleInput}
//             />
//             <Input
//               InputType={"number"}
//               name="T2"
//               // title={'T2'}
//               value={this.state.newFormValue.T2}
//               placeholder={"Введите T2"}
//               handleChange={this.handleInput}
//             />
//           </> */}

//           {/* <>
//             <Input
//               InputType={"number"}
//               name="V1"
//               // title={'V1'}
//               value={this.state.newFormValue.V1}
//               placeholder={"Введите V1"}
//               handleChange={this.handleInput}
//             />
//             <Input
//               InputType={"number"}
//               name="V2"
//               // title={'V2'}
//               value={this.state.newFormValue.V2}
//               placeholder={"Введите V2"}
//               handleChange={this.handleInput}
//             />
//           </> */}

//           {/* <>
//             <Input
//               InputType={"number"}
//               name="M1"
//               // title={'M1'}
//               value={this.state.newFormValue.M1}
//               placeholder={"Введите M1"}
//               handleChange={this.handleInput}
//             />
//             <Input
//               InputType={"number"}
//               name="M2"
//               // title={'M2'}
//               value={this.state.newFormValue.M2}
//               placeholder={"Введите M2"}
//               handleChange={this.handleInput}
//             />
//           </> */}

//           {/* <>
//             <Input
//               InputType={"number"}
//               name="work_device"
//               // title={'work_device'}
//               value={this.state.newFormValue.work_device}
//               placeholder={"Время работы"}
//               handleChange={this.handleInput}
//             />
//             <Input
//               InputType={"number"}
//               name="work_device_error"
//               // title={'work_device_error'}
//               value={this.state.newFormValue.work_device_error}
//               placeholder={"Время работы с ошибкой"}
//               handleChange={this.handleInput}
//             />
//           </>
//         </div> */}

//           {/* <TextArea
//           name="exampleFormControlTextarea1"
//           // title={'About you.'}
//           rows={10}
//           value={this.state.newFormValue.exampleFormControlTextarea1}
//           handleChange={this.handleTextArea}
//           placeholder={"Введите примечания"}
//         /> */}

//           {/* <div>
//           <Button />
//         </div> */}
//         </div>
//       </div>
//     );
//   }
// }
