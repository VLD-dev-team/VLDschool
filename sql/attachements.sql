CREATE TABLE
  public.attachements (
    "attachementID" serial NOT NULL,
    "chatID" integer NOT NULL,
    author integer NOT NULL,
    type
      character varying(10) NULL,
      path text NOT NULL,
      size integer NULL,
      mime_type character varying(255) NULL
  );

ALTER TABLE
  public.attachements
ADD
  CONSTRAINT attachements_pkey PRIMARY KEY (attachementID)