import { createContext } from "react"
import type { IPost } from "./IPost";


export  const dataContex = createContext<IPost[] | null>(null);