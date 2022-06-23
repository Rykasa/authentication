import { useContext } from "react";
import { AnimationContext } from "../Contexts/animationContext";

export function useAnimationContext(){
  return useContext(AnimationContext)
}