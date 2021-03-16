export interface GridProps {
  grid: string;
  gap?: string;
  padding?: string;
  margin?: string;
}

export interface GridItemProps {
  className?: string;
  rows: string;
  cols: string;
}

export interface InputProps {
  type: string;
  name: string;
  dataActionType?: string;
  font: string;
  fontSize: string;
  height: string;
  formData: {[key: string]: string | number};
  changeForm: React.ChangeEventHandler<HTMLInputElement>;
}