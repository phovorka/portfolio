import {
    FieldError,
    Input,
    Label,
    Text,
    TextArea,
    TextField,
    TextFieldProps,
} from "react-aria-components";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { cn } from "@/lib/utils";

interface Props<FormData extends FieldValues> extends TextFieldProps {
    control: Control<FormData>;
    description?: string;
    hiddenLabel?: boolean;
    isTextArea?: boolean;
    label: string;
    name: Path<FormData>;
}

export function TextInput<FormData extends FieldValues>(
    props: Props<FormData>,
) {
    const {
        control,
        description,
        hiddenLabel,
        isRequired,
        isTextArea,
        label,
        name,
        ...textFieldProps
    } = props;

    const { field, fieldState, formState } = useController({
        control,
        name,
    });

    return (
        <TextField
            className="flex flex-col"
            isInvalid={fieldState.invalid}
            isRequired={isRequired}
            name={field.name}
            onBlur={field.onBlur}
            onChange={field.onChange}
            validationBehavior="aria"
            value={field.value}
            {...textFieldProps}
        >
            <Label
                aria-hidden={hiddenLabel}
                className="mb-2.5"
                hidden={hiddenLabel}
            >
                {label}
            </Label>
            {isTextArea ? (
                <TextArea
                    className={({ isFocused }) =>
                        cn(
                            "rounded-lg border border-primary bg-primary-light p-4",
                            isFocused &&
                                "border-secondary-lightBlue outline-none ring-2 ring-secondary-lightBlue/30",
                        )
                    }
                    ref={field.ref}
                    rows={6}
                />
            ) : (
                <Input
                    className={({ isFocused }) =>
                        cn(
                            "h-10 rounded-lg border border-primary bg-primary-light px-4",
                            isFocused &&
                                "border-secondary-lightBlue outline-none ring-2 ring-secondary-lightBlue/30",
                        )
                    }
                    ref={field.ref}
                />
            )}
            {description && <Text slot="description">{description}</Text>}
            {formState.errors[name]?.message && (
                <FieldError className="mt-1 text-sm text-red-700">
                    {fieldState.error?.message}
                </FieldError>
            )}
        </TextField>
    );
}
