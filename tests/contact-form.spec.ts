import { test, expect } from "@playwright/test";

test("rechaza un email inválido sin llamar al proveedor de email", async ({
  page,
}) => {
  await page.goto("/contacto");
  await page.getByLabel("Nombre").fill("Test");
  await page.getByLabel("Email").fill("no-es-un-email");
  await page.getByLabel("Mensaje").fill("Mensaje de prueba.");
  await page.getByRole("button", { name: "Enviar mensaje" }).click();

  await expect(page.getByText("Introduce un email válido.")).toBeVisible();
});

test("envía el formulario y muestra el mensaje de éxito", async ({
  page,
}) => {
  test.skip(
    !process.env.RESEND_API_KEY,
    "Requiere RESEND_API_KEY configurada para probar el envío real"
  );

  await page.goto("/contacto");
  await page.getByLabel("Nombre").fill("Test E2E");
  await page.getByLabel("Email").fill("test@example.com");
  await page.getByLabel("Mensaje").fill("Mensaje de prueba automático.");
  await page.getByRole("button", { name: "Enviar mensaje" }).click();

  await expect(
    page.getByText("Gracias, tu mensaje se ha recibido. Te responderé lo antes posible.")
  ).toBeVisible();
});
