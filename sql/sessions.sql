CREATE TABLE
  public.sessions (
    id serial NOT NULL,
    "userId" integer NOT NULL,
    expires timestamp with time zone NOT NULL,
    "sessionToken" character varying(255) NOT NULL
  );

ALTER TABLE
  public.sessions
ADD
  CONSTRAINT sessions_pkey PRIMARY KEY (id)