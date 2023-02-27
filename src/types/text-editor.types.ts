import { EditorProps } from "draft-js"
import { InputHTMLAttributes } from "react"

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> 
type TypeEditorFieldProps = TypeInputProps & EditorProps

export interface ITextEditor extends Omit<TypeEditorFieldProps,'editorState' | 'onChange'>{
    label?: string
    onChange: (...event: any[]) => void
    value: string
}