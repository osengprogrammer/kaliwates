// MyDynamicForm.jsx
//@ts-nocheck
"use client"

// MyDynamicForm.jsx
import React from 'react';
import { useForm, SubmitHandler, useController } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodError } from 'zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface DynamicFormProps {
  formDataArray: { name: string; label: string; type: string; options?: string[] }[];
  schema: z.ZodObject<any, any, any>;
  onSubmit: SubmitHandler<Record<string, any>>;
}

const MyDynamicForm: React.FC<DynamicFormProps> = ({ formDataArray, schema, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const DynamicInput: React.FC<{ field: any }> = ({ field }) => {
    const {
      field: { onChange, onBlur, value },
    } = useController({
      name: field.name,
      control,
      defaultValue: '',
    });

    return (
      <div key={field.name} className="mt-2">
        <label className = "bg-green-500 px-2 rounded" htmlFor={field.name}>{field.label}</label>
        
        <FormItem>
        {field.type === 'select' ? (
          <select id={field.name} onChange={onChange} onBlur={onBlur} value={value}>
            <option value="">Select {field.label}</option>
            {field.options?.map((option:any) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <Input
            type={field.type}
            id={field.name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        {errors[field.name] && (<p>{errors[field.name]?.message}</p>)}
        </FormItem>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formDataArray.map((field) => (
        <DynamicInput key={field.name} field={field} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyDynamicForm;
