export const port = process.env.PORT || 3001;
export const websiteServer =
    process.env.WEBSITE_SERVER_URL || 'http://localhost:3000';
export const jwtSecret = process.env.JWT_SECRET || '1234567890';
export const sqlite = {
    file: process.env.SQLITE_FILE || './taho.sqlite',
};
