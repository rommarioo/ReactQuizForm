import React, { createContext, FC, useState } from "react";
type IValues = {
  step1?: string;
  step2?: string;
  step3?: string;
  step4?: string;
  Name?: string;
  Phone?: string;
  Email?: string;
};
interface IData {
  data: IValues;
  setValues: ({ step1, step2, step3, step4 }: IValues) => void;
}
interface IProps {
  children: React.ReactNode;
}

export const DataContext = createContext<IData>({
  data: {
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    Name: "",
    Phone: "",
    Email: "",
  },
  setValues: () => {},
});
export const DataProvider: FC<IProps> = ({ children }) => {
  const [data, setData] = useState<IValues>({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    Name: "",
    Phone: "",
    Email: "",
  });

  const setValues = ({
    step1,
    step2,
    step3,
    step4,
    Name,
    Phone,
    Email,
  }: IValues) => {
    if (step1) {
      setData((prevData) => ({ ...prevData, step1 }));
    } else if (step2) {
      setData((prevData) => ({ ...prevData, step2 }));
    } else if (step3) {
      setData((prevData) => ({ ...prevData, step3 }));
    } else if (step4) {
      setData((prevData) => ({ ...prevData, step4 }));
    } else if (Name && Phone && Email) {
      setData((prevData) => ({ ...prevData, Name, Phone, Email }));
    }
  };

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);
