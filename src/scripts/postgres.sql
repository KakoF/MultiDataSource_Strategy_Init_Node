
DROP TABLE IF EXISTS TB_HEROIS;
CREATE TABLE TB_HEROIS(
    ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    NOME TEXT NOT NULL,
    PODER TEXT NOT NULL
)
GO


-- Insert rows into table 'TableName'
INSERT INTO TB_HEROIS
( -- columns to insert data into
 NOME, PODER
)
VALUES
( -- first row: values for the columns in the list above
 'Flash', 'Velocidade'
),
( -- second row: values for the columns in the list above
 'Aquaman', 'Falar com os Peixes'
),
( -- third row: values for the columns in the list above
 'Batman', 'Dinheiro'
)
-- add more rows here


SELECT * FROM TB_HEROIS;
SELECT * FROM TB_HEROIS WHERE nome = 'Flash';


-- Update rows in table 'TableName'
UPDATE TB_HEROIS
SET
    NOME = 'Goku',
    PODER = 'Deus'
    -- add more columns and values here
WHERE ID = 1	/* add search conditions here */

-- Delete rows from table 'TableName'
DELETE FROM TB_HEROIS
WHERE ID = 2	/* add search conditions here */
