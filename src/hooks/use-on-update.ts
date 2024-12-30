import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export function useOnUpdate(effect: EffectCallback, deps: DependencyList) {
    const firstRun = useRef(true);

    useEffect(() => {
        if (firstRun.current) {
            firstRun.current = false;
            return;
        }
        return effect();
    }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
