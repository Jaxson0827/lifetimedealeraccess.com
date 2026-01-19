import { z } from "zod";

export function normalizePhoneDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export const searchIntakeSchema = z.object({
  name: z.string().trim().min(2, "Name is required."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .refine((v) => normalizePhoneDigits(v).length >= 7, {
      message: "Please enter a valid phone number.",
    }),
  vehicleLookingFor: z
    .string()
    .trim()
    .min(1, "Please tell us what vehicle you’re looking for."),
  submittedAt: z.string().optional(),
});

export type SearchIntake = z.infer<typeof searchIntakeSchema>;

export function sanitizeSearchIntake(input: unknown): SearchIntake {
  const parsed = searchIntakeSchema.parse(input);
  return {
    ...parsed,
    // Normalize whitespace without changing what user typed materially.
    name: parsed.name.trim().replace(/\s+/g, " "),
    email: parsed.email.trim(),
    phone: parsed.phone.trim(),
    vehicleLookingFor: parsed.vehicleLookingFor.trim(),
  };
}

