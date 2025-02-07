CREATE TABLE
  public.verification_token (
    identifier text NOT NULL,
    expires timestamp with time zone NOT NULL,
    token text NOT NULL
  );

ALTER TABLE
  public.verification_token
ADD
  CONSTRAINT verification_token_pkey PRIMARY KEY (identifier)