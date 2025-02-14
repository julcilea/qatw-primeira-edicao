import pgPromise from "pg-promise"

const pgp = pgPromise()
const db = pgp('postgresql://dba:dba@paybank-db:5432/UserDB')

export async function obterCodigo2FA() {
    const query = `
    SELECT t.code
	FROM public."TwoFactorCode" t
    JOIN public."User" u ON u."id" = t."userId"
    WHERE u."cpf" = '00000014141'
	ORDER BY t.id DESC
	LIMIT 1;
    `
    const result = await db.oneOrNone(query)
    return result.code
}